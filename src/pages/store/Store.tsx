import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { StoreItem } from "../../components/storeItem/StoreItem";
import { Pagination } from "../../hooks/pagination/Pagination";
import { BreadCrumbTrail } from "../../components/breadCrumbs/BreadCrumbTail";
import { Spinner } from "../../components/spinner/Spinner";
import SingleProductDetails from "../../components/singleProductDetails/SingleProductDetails";
import { ProductType } from "../../types/types";
import "./store.scss";

type CategoryType = {
  title: string;
  products: {
    title: string;
    price: number;
    imgs: string[];
  }[];
}[];

const Store: React.FC = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<CategoryType>([]);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Mobiles");
  const [whatToDisplay, setWhatToDisplay] = useState<string>("allProducts");
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);
  const [singleProductDetails, setSingleProductDetails] =
    useState<ProductType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  // Pagination states
  const PageSize = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/data.json"
      );
      const data = await response.json();

      // Create an array of promises for fetching images
      const imagePromises = data.products.map(
        async (product: { imgs: any[] }) => {
          // Replace gitcdn.link with raw.githubusercontent.com
          const modifiedImgs = product.imgs.map((img) =>
            img.replace(
              "https://gitcdn.link/cdn/seebham",
              "https://raw.githubusercontent.com/seebham"
            )
          );

          // Fetch each image and handle errors gracefully
          const validImageUrls = [];

          for (const img of modifiedImgs) {
            try {
              const response = await fetch(img);
              if (response.ok) {
                validImageUrls.push(img);
              }
            } catch (error) {
              console.log(`Unable to load image: ${img}`);
            }
          }

          return { ...product, imgs: validImageUrls };
        }
      );

      // Wait for all image promises to resolve
      const productsWithImages = await Promise.all(imagePromises);

      // Set state
      setAllProducts(productsWithImages);
      setCategories(data.categories);
    } catch (err: any) {
      setError(err.message);
      console.log(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const filterProducts = (category: string) => {
    const filteredProducts = allProducts.filter(
      (product) => product.category === category
    );
    setSelectedProducts(filteredProducts);
  };

  const handleCategoryClicked = (title: string) => {
    setSelectedCategory(title);
    setWhatToDisplay("allProducts");
  };

  const handleImgClicked = (
    product: React.SetStateAction<ProductType | undefined>
  ) => {
    setSingleProductDetails(product);
    setWhatToDisplay("singleProduct");
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (allProducts.length > 0) {
      filterProducts(selectedCategory);
    }
  }, [selectedCategory, allProducts]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return selectedProducts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, selectedProducts]);

  return (
    <section className="container">
      <div className="shopContainer">
        {error && <p className="errorText">{error}</p>}
        {loading && <Spinner />}
        <div className="categoriesContainer">
          {Object.keys(categories).map((categoryKey: any) => (
            <button
              key={categoryKey}
              className={
                selectedCategory === categories[categoryKey].title
                  ? "active-category"
                  : ""
              }
              onClick={() =>
                handleCategoryClicked(categories[categoryKey].title)
              }
            >
              {categories[categoryKey].title}
            </button>
          ))}
        </div>
        <div className="productsWrapper">
          {whatToDisplay === "allProducts" ? (
            <>
              <div className="productsContainer">
                {currentTableData.map((product, index) => (
                  <div key={index} className="store-item">
                    <StoreItem
                      onClickImg={() => handleImgClicked(product)}
                      id={product.id}
                      name={product.title}
                      price={product.price}
                      imgUrl={product.imgs[0]}
                    />
                  </div>
                ))}
              </div>
              <div className="paginationWrapper">
                <Pagination
                  currentPage={currentPage}
                  totalCount={selectedProducts.length}
                  pageSize={PageSize}
                  onPageChange={(page: number) => setCurrentPage(page)}
                  siblingCount={1}
                />
              </div>
            </>
          ) : (
            <div className="singleProduct">
              <BreadCrumbTrail
                productTitle={singleProductDetails?.title!}
                onClickHome={() => navigate("/")}
                onClickStore={() => setWhatToDisplay("allProducts")}
              />
              <img
                src={singleProductDetails?.imgs[0]}
                alt={singleProductDetails?.title}
              />
              <SingleProductDetails {...singleProductDetails} />
              {/* {singleProductDetails?.category.toLowerCase() === "mobiles" ? (
                <div className="mobile-details">
                  {singleProductDetails.Brand && (
                    <p>Brand: {singleProductDetails.Brand}</p>
                  )}
                  {singleProductDetails.RAM && (
                    <p>RAM: {singleProductDetails.RAM}</p>
                  )}
                  {singleProductDetails.price && (
                    <p>Price: {singleProductDetails.price}</p>
                  )}
                  {singleProductDetails.specs && (
                    <p>Specs: {singleProductDetails.specs}</p>
                  )}
                  {singleProductDetails.reviews && (
                    <>
                      <h4>Reviews</h4>
                      {singleProductDetails.reviews.map((reviewer, index) => (
                        <div key={index} className="single-review">
                          <p>{reviewer.name}:</p>
                          <p>{reviewer.title}:</p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ) : (
                <></>
              )} */}

              {/* {Object.entries(singleProductDetails).map(([key, value]) => (
                <p>{`${key}: ${value}`}</p>
              ))} */}

              {/* {JSON.stringify(singleProductDetails)} */}
            </div>
          )}
        </div>
      </div>
      {error && <p>Error: {error}</p>}
    </section>
  );
};

export default Store;

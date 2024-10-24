import { useNavigate } from "react-router-dom";
import { useProductsContext } from "../contexts";
import { categories } from "../data";
import { fetchData, getNewId, validateProduct } from "../helpers";
import { IProduct, TAlertColors } from "../interfaces";
import { FormInput } from ".";

type TType = "Add" | "Edit";

interface IProductFormProps {
  type: TType;
  product?: IProduct;
  handleMessage: (msg: string, color: TAlertColors) => void;
}

const BASE_URL = "https://dummyjson.com/products/";

export function ProductForm({ type, product, handleMessage }: IProductFormProps) {
  const { products, setProducts } = useProductsContext();
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    // Simulate a DELETE request
    try {
      await fetchData(BASE_URL + id, "Failed to delete product", {
        method: "DELETE",
      });

      setProducts((p) => p.filter((p) => p.id !== id));
      navigate("/products", {state: {message: "Product was deleted"}})
      handleMessage("Product was deleted", "red");
    } catch (error: any) {
      handleMessage(error.message, "red");
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    // Get all the images and filter out empty strings from the array
    const images = formData.getAll("image") as string[];
    const imagesFiltered = images.filter((image) => image.trim().length > 0);

    // Construct the product object from the form data
    const productObj: IProduct = {
      brand: formData.get("brand") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      dimensions: {
        width: parseFloat(formData.get("width") as string),
        height: parseFloat(formData.get("height") as string),
        depth: parseFloat(formData.get("depth") as string),
      },
      // If there's not an existing id get a new id based on current ones
      id: product ? product.id : getNewId(products),
      images: imagesFiltered,
      price: parseFloat(formData.get("price") as string),
      // If there's no rating default it to 0
      rating: product ? product.rating : 0,
      returnPolicy: "30 days return policy",
      reviews: [],
      shippingInformation: "Ships in 3 days",
      stock: parseInt(formData.get("stock") as string),
      tags: (formData.get("tags") as string).split(","),
      thumbnail: formData.get("thumbnail") as string,
      title: formData.get("title") as string,
      warrantyInformation: "1 month warranty",
    };

    // Validate the product
    if (!validateProduct(productObj)) {
      console.log("Please fill out all fields, a minimum of 1 image is required");
      handleMessage("Please fill out all fields, a minimum of 1 image is required", "red");
      return;
    }

    if (type === "Add") {
      // Simulate a POST request
      try {
        await fetchData(BASE_URL + "add", "Failed to add product", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productObj),
        });
  
        // Add product
        setProducts((p) => [...p, productObj]);

        handleMessage("Product was added", "green");

        // Reset the form inputs
        target.reset();
      } catch(error: any) {
        handleMessage(error.message, "red");
        console.error(error);
      }
    } else if (type === "Edit" && product) {
      // Simulate a PUT (Update) request
      try {
        await fetchData(BASE_URL + product.id, "Failed to edit product", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({product}),
        });

        // Check that it's a valid product being edited
        const isValidProduct = products.some((p) => p.id === product.id);
  
        if (isValidProduct) {
          // Find the index of the product and update the index position with the updated product
          const index = products.findIndex((p) => p.id === product.id);
          setProducts((p) => {
            p.splice(index, 1, productObj);
            return [...p];
          });
          handleMessage("Product has been edited", "green");
        }
      } catch (error: any) {
        console.error(error);
        handleMessage(error.message, "red");
      }
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <FormInput
        labelText="Product title"
        type="text"
        id="input-title"
        name="title"
        placeholder="Oppo A57"
        defaultValue={product ? product.title : ""}
      />
      <FormInput
        labelText="Brand"
        type="text"
        id="input-brand"
        name="brand"
        placeholder="Oppo"
        defaultValue={product ? product.brand! : ""}
      />
      <div className="price-stock-wrapper">
        <FormInput
          labelText="Price"
          type="number"
          id="input-price"
          name="price"
          placeholder="249.99"
          defaultValue={product ? product.price : ""}
          min={0.99}
          step={0.01}
        />
        <FormInput
          labelText="Stock"
          type="number"
          id="input-stock"
          name="stock"
          placeholder="76"
          defaultValue={product ? product.stock : ""}
          min={1}
          step={1}
        />
      </div>
      <FormInput
        labelText="Tags (comma separated)"
        type="text"
        id="input-tags"
        name="tags"
        placeholder="smartphones,oppo"
        defaultValue={product ? product.tags.join(",") : ""}
      />
      <label className="input-label" htmlFor="input-category">
        <span className="input-label__text">Category</span>
        <select
          name="category"
          id="input-category"
          defaultValue={product ? product.category : "--Select Category--"}
        >
          <option defaultValue="" disabled hidden>
            --Select Category--
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <p className="dimensions-title">Dimensions (cm)</p>
      <div className="dimensions-wrapper">
        <FormInput
          labelText="Width"
          type="number"
          id="input-width"
          name="width"
          placeholder="29.52"
          defaultValue={product ? product.dimensions.width : ""}
          min={0.01}
          step={0.01}
        />
        <FormInput
          labelText="Height"
          type="number"
          id="input-height"
          name="height"
          placeholder="11.25"
          defaultValue={product ? product.dimensions.height : ""}
          min={0.01}
          step={0.01}
        />
        <FormInput
          labelText="Depth"
          type="number"
          id="input-depth"
          name="depth"
          placeholder="14.41"
          defaultValue={product ? product.dimensions.depth : ""}
          min={0.01}
          step={0.01}
        />
      </div>
      <label className="input-label" htmlFor="input-description">
        <span className="input-label__text">Description</span>
        <textarea
          id="input-description"
          name="description"
          placeholder="The Oppo A57..."
          defaultValue={product ? product.description : ""}
        />
      </label>
      <FormInput
        labelText="Thumbnail (url)"
        type="text"
        id="input-thumbnail"
        name="thumbnail"
        placeholder="https://cdn/../thumbnail.png"
        defaultValue={product ? product.thumbnail : ""}
      />
      <FormInput
        labelText="Images (url)"
        type="text"
        id="input-images"
        name="image"
        placeholder="https://cdn/../1.png"
        defaultValue={product ? product.images : ""}
        numInputs={4}
      />
      <button className="product-form__submit" type="submit">
        Submit
      </button>
      {type === "Edit" && product && (
        <button
          className="product-form__delete"
          type="button"
          onClick={() => handleDelete(product.id)}
        >
          Delete
        </button>
      )}
    </form>
  );
}

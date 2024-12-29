import { render, screen } from "../../utils/test-utils";
import ProductCard from "./ProductCard";

const mockProduct = {
  _id: "1",
  title: "Test Product",
  type: "contract",
  price: 100000,
  location: {
    city: "台北市",
    district: "信義區",
  },
  images: ["/test-image.jpg"],
  features: ["交通便利", "環境優美"],
};

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(/生前契約/)).toBeInTheDocument();
    expect(screen.getByText(/NT\$ 100,000/)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockProduct.location.city} ${mockProduct.location.district}`
      )
    ).toBeInTheDocument();
  });

  it("renders product features", () => {
    render(<ProductCard product={mockProduct} />);

    mockProduct.features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it("links to the correct product detail page", () => {
    render(<ProductCard product={mockProduct} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/products/${mockProduct._id}`);
  });
});

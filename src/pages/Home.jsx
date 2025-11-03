import Vision from "../Ui/component/Carousel";
import ClinicIntro from "../Ui/component/Heading";
import LatestProducts from "../Ui/component/LastestProduct";
import ClinicServices from "../Ui/component/Services";
const demo = [
  {
    id: "lens-pro-001",
    name: "Pro Vision Lenses (Anti-Glare)",
    price: 55000,
    code: "BER-734H",
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Lenses",
    createdAt: "2025-10-18",
    amountInStock: 30,     // <<< NEW
    inStock: true,
    rating: 5,
  },
  {
    id: "lens-pro-002",
    name: "Pro Vision Lenses (Blue Light Filter)",
    price: 58000,
    code: "BLF-201A",
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Lenses",
    createdAt: "2025-10-20",
    amountInStock: 30,      // low stock badge
    inStock: true,
    rating: 4.5,
  },
  {
    id: "lens-pro-003",
    name: "UltraClear Anti-Reflective Lenses",
    price: 60000,
    code: "UCR-889Z",
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Lenses",
    createdAt: "2025-10-21",
    amountInStock: 30,      // out of stock
    inStock: false,
    rating: 4.8,
  },
  {
    id: "solution-001",
    name: "All-Day Comfort Lens Solution (120ml)",
    price: 8500,
    code: "SOL-120C",
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Solutions",
    createdAt: "2025-10-17",
    amountInStock: 22,
    inStock: true,
    rating: 4.2,
  },
  {
    id: "frame-aurora-001",
    name: "Aurora Blue Light Frames",
    price: 35000,
    code: "FRM-AUR-01",
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Frames",
    createdAt: "2025-10-22",
    amountInStock: 6,
    inStock: true,
    rating: 4.6,
  },
  {
    id: "frame-classic-002",
    name: "Classic Tortoise Shell Frames",
    price: 30000,
    code: "FRM-CLS-02",
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Frames",
    createdAt: "2025-10-16",
    amountInStock: 0,      // low stock
    inStock: true,
    rating: 4.1,
  },
  {
    id: "drop-hydra-001",
    name: "HydraFresh Lubricating Eye Drops",
    price: 4500,
    code: "DRP-HYD-01",
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Eye Drops",
    createdAt: "2025-10-15",
    amountInStock: 18,
    inStock: true,
    rating: 4.0,
  },
  {
    id: "cloth-micro-001",
    name: "Microfiber Lens Cleaning Cloth (2-Pack)",
    price: 2500,
    code: "ACC-MIC-02",
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Accessories",
    createdAt: "2025-10-19",
    amountInStock: 0,
    inStock: true,
    rating: 4.3,
  },
];

export default function Home() {
  return (
    <div>
      <ClinicIntro
        eyebrow="D’Cindy Eyecare"
        title="Your Vision, Our Priority"
        tagline="Give Your Eyes the Care They Deserve"
        brief="Discover expert eye care services designed to protect and enhance your vision."
        points={[
          "Comprehensive eye examinations",
          "Vision correction & lens advice",
          "Screening for glaucoma & cataract",
          "Stylish, comfortable frames",
        ]}
        align="center"
      />

      <Vision onBook={() => navigate("/book")} onExplore={() => navigate("/shop")} />

      {/* <LatestProducts
        products={demo}
        limit={8}
        seeAllHref="/shop"
        currency="NGN"
      /> */}
      <ClinicServices/>
    </div>
  );
}

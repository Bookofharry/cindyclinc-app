import Vision from "../Ui/component/Carousel";
import ClinicIntro from "../Ui/component/Heading";
import LatestProducts from "../Ui/component/LastestProduct";

const demo = [

  
  {
    id: "lens-pro",
    name: "Pro Vision Lenses (Anti-Glare)",
    price: 55000,
    code: 'BER-734H',
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Lenses",
    createdAt: "2025-10-18",
    inStock: true,
    rating: 5,
  },
  {
    id: "lens-pro",
    name: "Pro Vision Lenses (Anti-Glare)",
    price: 55000,
    code: 'BER-734H',
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Lenses",
    createdAt: "2025-10-18",
    inStock: true,
    rating: 5,
  },
  {
    id: "lens-pro",
    name: "Pro Vision Lenses (Anti-Glare)",
    price: 55000,
    code: 'BER-734H',
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Lenses",
    createdAt: "2025-10-18",
    inStock: true,
    rating: 5,
  },
  {
    id: "lens-pro",
    name: "Pro Vision Lenses (Anti-Glare)",
    price: 55000,
    code: 'BER-734H',
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Lenses",
    createdAt: "2025-10-18",
    inStock: true,
    rating: 5,
  },
  {
    id: "lens-pro",
    name: "Pro Vision Lenses (Anti-Glare)",
    price: 55000,
    code: 'BER-734H',
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Lenses",
    createdAt: "2025-10-18",
    inStock: true,
    rating: 5,
  },
  {
    id: "lens-pro",
    name: "Pro Vision Lenses (Anti-Glare)",
    price: 55000,
    code: 'BER-734H',
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Lenses",
    createdAt: "2025-10-18",
    inStock: true,
    rating: 5,
  },
  {
    id: "lens-pro",
    name: "Pro Vision Lenses (Anti-Glare)",
    price: 55000,
    code: 'BER-734H',
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Lenses",
    createdAt: "2025-10-18",
    inStock: true,
    rating: 5,
  },
  {
    id: "lens-pro",
    name: "Pro Vision Lenses (Anti-Glare)",
    price: 55000,
    code: 'BER-734H',
    imageUrl: "https://i.ebayimg.com/images/g/J60AAOSwJB5knvuj/s-l1200.jpg",
    category: "Lenses",
    createdAt: "2025-10-18",
    inStock: true,
    rating: 5,
  },

];



export default function Home(){

    return(
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
                align="center" // or "left"
            />
            <Vision onBook={() => navigate('/book')} onExplore={() => navigate('/shop')} />
            <LatestProducts
                products={demo}
                limit={8}
                seeAllHref="/shop"
                currency="NGN"
            />

        </div>
    )

}
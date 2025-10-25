import Vision from "../Ui/component/Carousel";
import ClinicIntro from "../Ui/component/Heading";
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

        </div>
    )

}
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
import Image from "next/image";

const Collaboration = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">Collaboration</h3>
              <p className="text-uppercase small">Brands I've Worked With</p>
            </div>
          </div>
        </div>
        {/* SwiperSlider needs to always be atleast 2X Slides Per View, That's why SwiperSlides is looped twice*/}
        <Swiper {...sliderProps.testimonial}>
          {/* testimonials */}
          {Array(2).fill("").map((_ , index) => (
            <div key={index}>
              <SwiperSlide>
                <div className="testimonial-col-01 border-0 d-flex justify-content-center align-items-center">
                  <Image
                    src="/assets/collab/caricarz.svg"
                    alt="caricarz"
                    width={250}
                    height={100}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="testimonial-col-01 border-0 d-flex justify-content-center align-items-center">
                <div>
                  <Image
                    src="/assets/collab/chargesini.svg"
                    alt="caricarz"
                    width={200}
                    height={100}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="testimonial-col-01 border-0 d-flex justify-content-center align-items-center">
                <div>
                  <Image
                    src="/assets/collab/webby.svg"
                    alt="caricarz"
                    width={200}
                    height={100}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="testimonial-col-01 border-0 d-flex justify-content-center align-items-center">
                <div>
                  <Image
                    src="/assets/collab/wallguru.png"
                    alt="caricarz"
                    width={100}
                    height={100}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="testimonial-col-01 border-0 d-flex justify-content-center align-items-center">
                <div className="m-35px-t">
                  <Image
                    src="/assets/collab/solarspeed.png"
                    alt="caricarz"
                    width={200}
                    height={19}
                  />
                </div>
              </SwiperSlide>
            </div>
          ))}
          {/* / */}
        </Swiper>

        <div className="section-title">
          <p className="dark-color small">
            * Please note that due to the proprietary nature of these projects,
            I am unable to provide specific details about them.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Collaboration;

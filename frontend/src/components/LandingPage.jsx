import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <div className="">
          <img
            src="https://goodguyvapes.com/cdn/shop/files/Vaporesso_XROS_3_Mini_1.jpg?v=1671034284"
            className="d-block w-100"
            alt="..."
          />
        </div>

        {/* Headings and paragraphs */}
        <h2 className="mt-5">Let's Vaping</h2>
        <p>
          Welcome to The Vape Town, the Best Vape Shop in Lahore, Pakistan.
          Discover a comprehensive array of vaping solutions tailored to meet
          your every need, featuring renowned brands such as Salt Nics, Juul,
          VaporCraft, and premium e-juices from the USA including Naked 100 and
          Vapetasia. Explore an assortment that encompasses pod mods like
          GeekVape and Voopoo, Electronic Shisha by Starbuzz, starter kits by
          Aspire, rebuildable tanks from Wotofo, and more, all thoughtfully
          curated to cater to your preferences. This curated collection is now
          available at the most competitive prices across Pakistan.
        </p>
        <p>
          Experience excellence as you choose from our curated assortment of
          high-quality e-cigarettes and e-liquids sourced directly from
          reputable manufacturers in the UK, USA, and Malaysia. We take immense
          pride in presenting you with the epitome of vaping products, featuring
          brands like Innokin, SMOK, and Vaporesso, at unparalleled prices,
          conveniently accessible within Pakistan.
        </p>
        <p>
          As the best vaping store in Lahore, we are dedicated to ensuring a
          seamless shopping experience, complete with prompt 2-day delivery
          right to your doorstep. Indulge in a journey through our meticulously
          crafted collection of best-selling e-liquids, cutting-edge pods and
          mods, convenient disposable vapes, precision-engineered coils and
          pods, innovative tanks, state-of-the-art pod devices, and an array of
          accompanying accessories. At The Vape Town, our paramount focus is on
          elevating customer satisfaction, all while endeavoring to offer you
          the quintessential vaping encounter.
        </p>
        <h2 className="my-5 ">
          Buy Electronic Cigarettes and Vape Ejuice, POD Devices, Tanks, Box
          Mods, Coils and Replacement Pods.
        </h2>
        <p>
          With Artisan Vapor Company being among the first both offline and
          online vape shops in Pakistan, we strive to bring the utmost
          convenience to the vaping community. We have the largest vape shop
          network with 20+ outlets serving excellence across the country. Get
          all your vape devices from vape mods to disposable vapes, vape
          flavours, vape kits, pod vapes and more. Our vape shops are stationed
          in all the prime locations of Karachi, Hyderabad, Bahawalpur, Multan,
          Faisalabad, Lahore, Gujranwala, Islamabad, Rawalpindi, Peshawar,
          Abbottabad and SWAT. So, stop by at any of our Artisan Vapor stores
          near you or have a vape direct at your doorstep through Artisan Vapor
          Pakistan’s exceptional next day delivery.
        </p>

        {/* Images */}
        <img
          src="https://www.vaperempire.com.au/media/revslider/homeslider/homepage_slider_banner_viggo_minified.jpeg"
          className="img-fluid"
          alt="Responsive image"
        />
        <img
          src="https://vapegreen.co.uk/blog/wp-content/uploads/2023/06/Best-Inhale-Activated-Pod-Kits-of-2023.jpg"
          className="img-fluid"
          alt="Responsive image"
        />

        {/* More paragraphs */}
        <p className="mt-5">
          {" "}
          Experience excellence as you choose from our curated assortment of
          high-quality e-cigarettes and e-liquids sourced directly from
          reputable manufacturers in the UK, USA, and Malaysia. We take immense
          pride in presenting you with the epitome of vaping products, featuring
          brands like Innokin, SMOK, and Vaporesso, at unparalleled prices,
          conveniently accessible within Pakistan.
        </p>
        <p>
          {" "}
          As the best vaping store in Lahore, we are dedicated to ensuring a
          seamless shopping experience, complete with prompt 2-day delivery
          right to your doorstep. Indulge in a journey through our meticulously
          crafted collection of best-selling e-liquids, cutting-edge pods and
          mods, convenient disposable vapes, precision-engineered coils and
          pods, innovative tanks, state-of-the-art pod devices, and an array of
          accompanying accessories. At The Vape Town, our paramount focus is on
          elevating customer satisfaction, all while endeavoring to offer you
          the quintessential vaping encounter.
        </p>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;

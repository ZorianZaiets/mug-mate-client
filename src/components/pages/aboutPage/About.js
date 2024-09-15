import React from 'react';
import './About.css'
import alluminium_cnc from '../../../img/alluminium-cnc.png'
import wood_cnc from '../../../img/wood-cnc.png'
import ddd_printing from '../../../img/3d_printing.jpg'
import type_c_connection from '../../../img/type-c-connection.jpg'
import coffe_perfect_moment from '../../../img/coffe-perfect-moment.jpg'

function About(props) {
    return (
        <div className="about">
            <div className="container">
                <article className="about-article">
                    <h1 className="about-main-title">About MugMate</h1>
                    <h2 className="about-common-title">What is MugMate?</h2>
                    <p>Welcome to the world of perfect tea and coffee enjoyment with <strong>MugMate</strong> – a unique
                        coaster that
                        ensures your beverage is always at the ideal drinking temperature. We understand how important
                        it is to savor every sip, and that’s why we created MugMate to make this moment even more
                        special.</p>

                    <h2 className="about-common-title">The Concept and Materials</h2>
                    <p><strong>MugMate</strong> combines traditional materials with modern technology. We offer our
                        product in three
                        options: wood, aluminum, and plastic.</p>

                    <p>The <strong>wooden</strong> parts are crafted with precision
                        using CNC machine, ensuring
                        smoothness and perfect proportions for each item. We carefully select high-quality materials to
                        ensure they look stylish and last long.</p>
                    <img src={wood_cnc} alt=""/>
                    <p>The <strong>alluminium</strong> parts are also made on CNC machine. Unlike aluminum casting,
                        milling
                        leaves a
                        beautiful aluminum texture, giving the product a unique appearance.</p>
                    <img src={alluminium_cnc} alt=""/>

                    <p>The <strong>plastic</strong> coasters are made using 3D printing technology, allowing us to
                        offer lightweight and
                        modern designs, ideal for those who prefer innovative solutions.</p>
                    <img src={ddd_printing} alt=""/>

                    <h2 className="about-common-title">Technology and Power</h2>

                    <p>One of the key features of <strong>MugMate</strong> is its functionality. You can connect it to
                        your device by USB
                        or Bluetooth and get statistic of your coffee breaks every time.</p>

                    <p><strong>MugMate</strong> is powered by an accumulator or connects via USB Type-C, making it
                        convenient and
                        portable. You can use it anywhere – at home, in the office, or on the go.</p>
                    <img src={type_c_connection} alt=""/>


                    <h2 className="about-common-title">Creating the Perfect Moment</h2>

                    <p>For us, a cup of tea or coffee is not just a drink – it's an essential part of your day, a ritual
                        that brings relaxation and pleasure. With <strong>MugMate</strong>, you’ll always know when your
                        drink is ready
                        for that perfect sip. No more guessing – <strong>MugMate</strong> takes care of you, helping you avoid drinks
                        that are too hot or too cold. </p>
                    <img src={coffe_perfect_moment} alt=""/>

                    <h2 className="about-common-title">Why Choose MugMate?</h2>

                    <p><strong>MugMate</strong> is more than just a coaster, it’s an innovative solution combining
                        thoughtful design and
                        modern technology. We use advanced manufacturing techniques, such as CNC machining and 3D
                        printing,
                        to create a product that will serve you well and bring joy through its quality.</p>

                    <p className="about-moment-slogan">Choose MugMate – and enjoy your drink at the perfect moment!</p>
                </article>
            </div>
        </div>
    );
}

export default About;
import './DeliveryElement.css'

import {React, useState} from 'react';

function DeliveryElement({convertPrice, currencyChar, postType, setPostType, setDeliveryPrice, ukr_price , nova_price}) {



    const handlePostTypeChange = (e) => {
        setPostType(e.target.value);
        if (e.target.value === 'novaPost') {
            setDeliveryPrice(nova_price);
        }else{
            setDeliveryPrice(ukr_price);
        }
    }

    return (
        <div className="DeliveryElement">
            <h2 className="delivery-title">Delivery</h2>
            <div className={`nova-post-container ${postType === "novaPost" ? 'nova-active' : ''} `}>
                <div className="nova-post-input-row">
                    <input type="radio" id="novaPost" name="delivery" value="novaPost" checked={postType === 'novaPost'} onChange={handlePostTypeChange}/>
                    <label htmlFor="novaPost">Nova Post</label>
                    <p className='delivery-price'>{currencyChar}{convertPrice(nova_price)}</p>
                </div>
                <input type="text" className="post-office-number"
                       placeholder='Enter the post office number'/>
            </div>

            <div className={`ukr-post-container ${postType === "ukrPost" ? 'ukr-active' : ''} `}>
                <div className="ukr-post-input-row">
                    <input type="radio" id="ukrPost" name="delivery" value="ukrPost" checked={postType === 'ukrPost'} onChange={handlePostTypeChange}/>
                    <label htmlFor="ukrPost">Ukrainian Post</label>
                    <p className='delivery-price'>{currencyChar}{convertPrice(ukr_price)}</p>
                </div>
            </div>
        </div>
    );
}

export default DeliveryElement;
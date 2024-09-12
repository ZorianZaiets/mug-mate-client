import './PayButton.css'
import {React, useState, useEffect} from 'react';


function PayButton({sumToPay, currency}) {
    const apiUrl = 'https://mug-mate-server.vercel.app';
    console.log('API_URL:',apiUrl);

    const [signature, setSignature] = useState(''); // Стейт для подписи
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Стейт для загрузки
    const [receivedSignature, setReceivedSignature] = useState(false); // Стейт для отслеживания получения подписи


    const handleSubmit = async (event) => {
        event.preventDefault(); // Отключаем стандартную отправку формы
        setIsLoading(true); // Устанавливаем флаг загрузки
        setReceivedSignature(false);
        const orderId = Math.floor(100000 + Math.random() * 900000);

        const json_string = {
            "public_key": "sandbox_i96984545373",
            "version": "3",
            "action": "pay",
            "amount": `${sumToPay}`,
            "currency": `${currency}`,
            "description": "test",
            "order_id": `${orderId}`
        }


        const data2 = btoa(JSON.stringify(json_string));
        setData(data2);

        try {
            // Отправляем запрос на сервер для шифрования
            const response = await fetch(`${apiUrl}/api/encrypt`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({data2}), // Отправляем данные
            });

            const result = await response.json();
            const receivedSignature = result.signature;

            console.log('Signature from server:', result.signature);

            if (receivedSignature) {
                setSignature(receivedSignature); // Сохраняем подпись в стейт
                setReceivedSignature(true); // Устанавливаем флаг, что подпись получена
            }
        } catch (error) {
            console.error('Ошибка при получении подписи:', error);
        } finally {
            setIsLoading(false); // Сбрасываем флаг загрузки
        }
    };

    useEffect(() => {
        if (receivedSignature) {
            // Программно отправляем форму, когда подпись обновилась
            const form = document.getElementById('payment-form');
            form.submit(); // Отправляем форму на LiqPay
        }
    }, [receivedSignature]);


    return (
        <div>
            <form id="payment-form" method="POST" action="https://www.liqpay.ua/api/3/checkout"
                  accept-charset="utf-8"
                  onSubmit={handleSubmit}>
                <input type="hidden" name="data"
                       value={data}/>
                <input type="hidden" name="signature"
                       value={signature}/>
                <button type="submit" className="pay-button">
                    {isLoading ? 'Processing...' : 'Pay now'}
                </button>
            </form>
        </div>
    );
}

export default PayButton;
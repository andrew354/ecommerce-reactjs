import React from 'react';
import './home.css';
import Product from '../Product/Product.js';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/gateway/placement/launch/boratsubsequentmoviefilm/SENG_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_it-IT._CB417535063_.jpg"
					alt="homeContainerImage"
				/>
				<div className="home__row">
					<Product
						id="104"
						title={
							"Notebook SSD slim Acer Intel i3 10 th, RAM 12 GB, SSD 512GB m2, display 15.6 Full hd led, Svga Intel HD 600, 3 USB, Wi-Fi, hdmi, BT, Win 10 Pro, Libre Office, Pronto all'Uso, Garanzia Italia"
						}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/81jT-AmGCBL._AC_SL1500_.jpg'
						}
						price={9.99}
						rating={4}
					/>
					<Product
						id="105"
						title={
							"Honor 9X Lite Smartphone, 4GB RAM 128GB ROM Cellulare, 6.5''Full HD+ 48MP Telecamera,NFC Dual Sim,Sblocco viso e Impronte Digitali, con Auricolare Classico,Verde"
						}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/61mqPtLFfAL._AC_SL1500_.jpg'
						}
						price={159.99}
						rating={5}
					/>
					<Product
						id="106"
						title={
							"HONOR 20 Smartphone,6GB RAM, Memoria 128 GB, 6.26'' FHD+,CPU Kirin 980 Quadrupla Fotocamera Posteriore AI 48+16+2+2 MP,Fotocamera Anteriore da 32 MP, Impronta Digitale Montata Lateralmente,NFC,Nero"
						}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/61zj0ri0lNL._AC_SL1500_.jpg'
						}
						price={299.99}
						rating={4}
					/>
					<Product
						id="107"
						title={
							"Honor 20 Lite Smartphone, 4 GB RAM, Memoria Espandibile da 128 GB, Display 6.21'' FHD+, Tripla Fotocamera Posteriore da 24+8+2 MP, Fotocamera Anteriore 32 MP, Blu [Italia]"
						}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/31-avifbgfL._AC_.jpg'
						}
						price={166.0}
						rating={5}
					/>
					<Product
						id="102"
						title={
							'TopACE Custodia Cover per Huawei MediaPad T5 10, Ultra Sottile Lightweight Smart Case con Supporto Funzione di Leggio per MediaPad T5 10(Blu)'
						}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/71PgGGEcrjL._AC_SL1500_.jpg'
						}
						price={691.95}
						rating={4}
					/>
					<Product
						id="103"
						title={
							'Laptop HUAWEI MateBook 13 FullView, Display 2K, 3 Pollici, AMD Ryzen 5 3500U, 8GB RAM, 256GB SSD, Windows 10 Home, Huawei Multi-screen Collaboration, Fingerprint Unlock, Fast Charging, Space Grey'
						}
						image={
							'https://images-na.ssl-images-amazon.com/images/I/51Jc7QWN2CL._AC_SL1000_.jpg'
						}
						price={619.77}
						rating={3}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;

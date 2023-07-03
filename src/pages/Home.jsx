import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation(["home"]);

	return (
		<div className="container mt-5">
			<h1 className="text-center">{t("home")}</h1>
			<div className="flex">
				<img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/si7yz748dv73ijbritnp"
					alt="img" ></img>
				<h1>{t("logo")}</h1>
				<p>{t("description")}</p>
			</div>
			
		</div>
	);
};

export default Home;

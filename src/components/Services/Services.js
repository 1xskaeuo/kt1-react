import Service from "./Service";
import servicesStyles from "./services.module.css"

export default function Services() {
    const services = [
        {
            title: "Годовое ТО",
            color: "#22356F",
            className: servicesStyles.card1
        },
        {
            title: "Выравнивание колес",
            color: "#0052C1",
            className: servicesStyles.card2
        },
        {
            title: "Настройка переключателей",
            color: "#76B58B",
            className: servicesStyles.card3
        }
    ];

    return (
        <div className={servicesStyles.services}>
            {services.map((service, index) => (
                <Service
                    key={index}
                    title={service.title}
                    color={service.color}
                    className={service.className}
                />
            ))}
        </div>
    );
}
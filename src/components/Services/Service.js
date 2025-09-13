import serviceStyles from "./service.module.css"

export default function Service({ title, color, className }) {
    return (
        <div className={`${serviceStyles.card} ${className}`} style={{ backgroundColor: color }}>
            <hr />
            <p className={serviceStyles.serviceText}>{title}</p>
        </div>
    );
}       
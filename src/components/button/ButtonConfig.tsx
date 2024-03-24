
import styles from "./style.module.scss";

interface Props{
    name?: string;
    onClick?: () => void;
    type?: "delete" | "normal" | "fullbg";
    icon?: any;
    with?: string;
    height?: number;
    background?: string;
    color?: string;
    ml?: number;
    mr?: number;
}


function ButtonConfig(props: Props):JSX.Element {

    return (
        <button 
            onClick={props.onClick} 
            className={
                props?.type === "delete" ? 
                styles.buttonconfigtodelete :
                props.type === "normal" ?
                styles.buttonconfignormal :
                styles.buttonconfigfullbg
            }
            style={{
                width: `${props.with ?? "100%"}`,
                height: `${props.height}px`,
                background: `${props.background}`,
                color: `${props.color}`,
                marginLeft: `${props.ml}px`,
                marginRight: `${props.mr}px`,
            }}
        >
            {props.name}
            {props.icon}
        </button>
    )
}

export default ButtonConfig
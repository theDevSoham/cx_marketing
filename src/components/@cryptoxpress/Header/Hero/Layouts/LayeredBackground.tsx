import styles from "./styles/Layout.module.css";
import { Grid } from "antd";

export default function LayeredBackground({ children }) {
    const { useBreakpoint } = Grid;
	const screens = useBreakpoint();
    return (
        <div className={styles.HeroContainer} style={{
            height: "auto",
            padding: screens.lg ? "2rem 0" : screens.sm ? "5rem 20px" : "3rem 20px"
        }}>
            {/* <div className={styles.HeroOverlay}></div> */}
            <div className={styles.HeroContent}>
                {children}
            </div>
        </div>
    );
}

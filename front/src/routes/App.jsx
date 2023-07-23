import "./App.css";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
    const routeToWeeb = () => {
        window.location.href = "/weeb";
    };

    const routeToSigma = () => {
        window.location.href = "/sigma";
    };

    const routeToThief = () => {
        window.location.href = "/thief";
    };

    return (
        <div className="center">
            <h2>مینی وبسایت</h2>

            <Grid container rowSpacing={1}>
                <Grid xs={12} md={4}>
                    <img
                        src="../../images/weeb_detector.png"
                        alt="Weeb Detector"
                        onClick={routeToWeeb}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <img
                        src="../../public/images/sigma_detector.png"
                        alt="Sigma Detector"
                        onClick={routeToSigma}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <img
                        src="../../public/images/thief_detector.png"
                        alt="Thief Detector"
                        onClick={routeToThief}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;

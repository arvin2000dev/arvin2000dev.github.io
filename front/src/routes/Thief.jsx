import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";

function Thief() {
    const [currentComponent, setCurrentComponent] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [userName, setUserName] = useState("");
    const [done, setDone] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedValues, setSelectedValues] = useState({
        literacy: 0,
        thief: 0,
        religion: 0,
    });

    const nextComponent = () => {
        setCurrentComponent((prevComponent) => prevComponent + 1);
    };

    const handleIncrement = (value) => {
        setScore((prevScore) => prevScore + value);
    };

    const handleChange = (event) => {
        const value = event.target.value;
        if (value.length < 3) {
            setIsDisabled(true);
        } else {
            setUserName(value);
            setIsDisabled(false);
        }
    };

    const handleLiteracyChange = (event) => {
        const value = event.target.value;

        if (!value) {
            setIsDisabled(true);
        } else {
            if (value == 0) {
                setIsDisabled(true);
            } else {
                setIsDisabled(false);
                handleIncrement(value);
                setSelectedValues((prevValues) => ({
                    ...prevValues,
                    literacy: value,
                }));
            }
        }
    };

    const handleThiefChange = (event) => {
        const value = event.target.value;
        if (!value) {
            setIsDisabled(true);
        } else {
            if (value == 0) {
                setIsDisabled(true);
            } else {
                setIsDisabled(false);
                handleIncrement(value);
                setSelectedValues((prevValues) => ({
                    ...prevValues,
                    thief: value,
                }));
            }
        }
    };

    const handleRelegionChange = (event) => {
        const value = event.target.value;
        if (!value) {
            setIsDisabled(true);
        } else {
            if (value == 0) {
                setIsDisabled(true);
            } else {
                setIsDisabled(false);
                handleIncrement(value);
                setSelectedValues((prevValues) => ({
                    ...prevValues,
                    religion: value,
                }));
            }
        }
    };

    let buttonText = "نه بابا چه حرفیه من جنبه دارم بزن بریم";

    useEffect(() => {
        if (currentComponent != 0) {
            setIsDisabled(true);
        }

        if (currentComponent == 5) {
            setTimeout(() => {
                setDone(true);
            }, 2000);
        }
    }, [currentComponent]);

    const renderComponent = () => {
        switch (currentComponent) {
            case 0:
                return (
                    <h1>
                        این سوالات صرفا جنبه شوخی دارند اگر جنبه ندارید گمشید
                        بیرون، ممنون
                    </h1>
                );
            case 1:
                return (
                    <TextField
                        id="outlined-basic"
                        label="اسم کوچیکت چیه؟"
                        variant="outlined"
                        margin="dense"
                        onChange={handleChange}
                    />
                );
            case 2:
                return (
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-label">
                            چند کلاس سواد داری؟
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="چند کلاس سواد داری؟"
                            value={selectedValues.literacy}
                            onChange={handleLiteracyChange}
                        >
                            <MenuItem value={0}></MenuItem>
                            <MenuItem value={5}>بی سوادم</MenuItem>
                            <MenuItem value={4}>شیش کلاسه</MenuItem>
                            <MenuItem value={6}>آخوندم (بی سواد)</MenuItem>
                            <MenuItem value={2}>دکتری افتخاری</MenuItem>
                            <MenuItem value={1}>
                                مثل عامه مردم درس میخونم یا خوندم
                            </MenuItem>
                        </Select>
                    </FormControl>
                );
            case 3:
                return (
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-label2">
                            دزدی کار درستیه ؟
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label2"
                            id="demo-simple-select2"
                            label="دزدی کار درستیه ؟"
                            value={selectedValues.thief}
                            onChange={handleThiefChange}
                        >
                            <MenuItem value={0}></MenuItem>
                            <MenuItem value={1}>خیر</MenuItem>
                            <MenuItem value={2}>بله</MenuItem>
                            <MenuItem value={5}>انشالله</MenuItem>
                            <MenuItem value={4}>بستگی به نیت داره</MenuItem>
                            <MenuItem value={3}>
                                استغفرالله این چه حرفیه (اره)
                            </MenuItem>
                        </Select>
                    </FormControl>
                );
            case 4:
                return (
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-label3">
                            نظر شما درباره دین چیست ؟
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label3"
                            id="demo-simple-select3"
                            label="نظر شما درباره دین در سیاست چیست ؟"
                            value={selectedValues.religion}
                            onChange={handleRelegionChange}
                        >
                            <MenuItem value={0}></MenuItem>
                            <MenuItem value={2}>نظری ندارم</MenuItem>
                            <MenuItem value={3}>
                                خب معلومه اسلام باید تو سیاست دخیل باشه
                            </MenuItem>
                            <MenuItem value={1}>
                                هیچ دینی تو سیاست دخیل نباشه بهتره
                            </MenuItem>
                        </Select>
                    </FormControl>
                );

            case 5:
                var toShow = userName + " جان ";
                if (score == 13) {
                    toShow +=
                        "تبریک میگم، در سیستم فعلی شما جایگاه خوبی بدست خواهید آورد مثلا رئیس جمهور یا رئیس مجلس و ... شما جزو اون دسته از افرادی هستید که در حوضه علمیه علم و دانش بیکران کسب میکنید و با پارتی منسب خود را دریافت و کمر همت میبندید تا ممکلت رو هر چه بیشتر با دزدی و فساد و … اداره کنید";
                } else if (score == 3) {
                    toShow +=
                        "متاسفم، در سیستم فعلی شما نهایت جایگاهی که کسب کنید کارگر ساده باشه که مجبوره تا خرخره مالیات بده و ازش دزدی بشه اگر هم حرفی بزنی که میندازنت زندان یا از بالا پشت بوم پرتت میکنن پایین یا میگم مریض بود خودکشی کرد یا میگن مریض بود خودش افتاد مرد";
                } else if (score == 4) {
                    toShow +=
                        "بنظر میرسه شما پتانسیل تبدیل شدن به یک شهردار یا عضو شورای شهر رو داشته باشید، حواستون باشه که هنوز دزدی یکم زوده، سعی کنید بیشتر چاپلوسی کنید و وعده های تو خالی بدید.";
                } else if (score == 5) {
                    toShow +=
                        "اصلا بنظر نمیاد شما گوسفند هستید، آفرین! منسب های خوبی در انتظار شماست از جمله نمایندگی مجلس، سعی کنید هر چه بیشتر وعده های الکی بدید، هنگام انتخابات هم به مردم احمق با دادن فلش رایگان، یک پرس جلو مرغ، جوجه، کباب، گوشت یا هر مرگ دیگه ای رای اون ها رو بگیرید، آینده روشنی دارید";
                } else if (score == 6) {
                    toShow +=
                        "آینده در انتظار شماست، از گاو بودن دیگران نهایت استفاده رو ببرید و سعی کنید مستقیما دزدی کنید. فرصت طلایی پیش پای شماست از پارتی های فراوان نهایت استفاده رو ببرید";
                } else if (score == 7) {
                    toShow +=
                        "احسنت، باریکلا! ریاست دیوان های مختلف مملکت در انتظار شماست! فرصت طلایی دزدی و ایجاد فساد هرچه بیشتر اما از رد مهر روی پیشونی غافل نشید و همیشه تسبیح داشته باشید و ذکر های الکی بگید. ";
                } else if (score == 8) {
                    toShow +=
                        "بی شک، شما به جایگاه های بسیار خوب نظام خواهید رسید، وزارت خانه های مختلف جایگاه شماست و پله ای ترقی. سعی کنید تا میتونید ریا کنید، دروغ بگید و دزدی کنید";
                } else if (score == 9) {
                    toShow +=
                        "سخنگوی وزارت های مختلف در انتظار شماست، سعی کنید مردم رو گوسفند فرض کنید و به اون ها دروغ بگید اما یادتون باشه که از دروغ غافل نشید";
                } else if (score == 10) {
                    toShow +=
                        "تبریک میگم شما به عنوان دست راست و مشاور وزیر های خارجه مختلف انتخاب میشید، شما اصولا کاری برای انجام دادن ندارید پس وقتتون رو صرف چاپیدن و قاپیدن اموال عمومی کنید";
                } else if (score == 11) {
                    toShow +=
                        "شما لیاقت وزیر شدن رو دارید، با وزارت شما بر وزارت خانه های مختلف مردم همیشه در خواب هم آسوده تر میخوابند اما فراموش نکنید که این فرصت فقط یکبار به شما داده میشه بنابراین تا میتونید وعده های چرند و الکی بدید تا مردم احمق زودباور هم قبول کنند و در این حین با چاپیدن اموال عمومی بپردازید و و به هیچ عنوان از ریا و نماز خوندن وسط جلسه فراموش نکنید";
                } else if (score == 12) {
                    toShow +=
                        "وزارت کل کشور برای جناب عالی، سعی کنید با رانت های مختلف و با همون پولی که از مردم گاو دزدیدید مجتمع های تجاری مختلفی بسازید و باز از همون مردم پول بیشتری بگیرید.";
                }
                return done ? <h2>{toShow}</h2> : <CircularProgress />;
            default:
                return null;
        }
    };

    return (
        <div className="center">
            {renderComponent()}
            <br />
            <Button
                onClick={() => nextComponent()}
                variant="contained"
                disabled={isDisabled}
            >
                {currentComponent == 0 ? buttonText : "سوال بعدی"}
            </Button>
        </div>
    );
}

export default Thief;

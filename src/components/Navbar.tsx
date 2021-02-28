import React from 'react';
import { createUseStyles } from 'react-jss';
import { Carousel, Input, Menu } from 'antd';
import img1 from './image/a.jpg';
import img2 from './image/b.jpg';
import img3 from './image/c.jpg';
import img4 from './image/d.jpg';
import img5 from './image/e.jpg';
import Carddd from './Carddd';

const { Search } = Input;

const Usestyles = createUseStyles({
    mainWrapper: {
        height: "100vh",
        backgroundColor: "#5b84b1ff",
    },
    navWrapper: {
        display: "flex",
        justifyContent: "space-between",

    },
    searchfield: {
        margin: "20px",

    },
    comwrapper: {
        margin: "20px",
        backgroundColor: "#5b84b1ff",
        "& .ant-menu.ant-menu-light.ant-menu-root.ant-menu-horizontal ": {
            backgroundColor: "#4e7caf"
        }
    },
    carousell: {
      width: "100%"

    },
    contentStyle: {
        height: "700px",
        lineHeight: "160px",
        textAlign: "center",
        width: "100%"

    },
    cardWrapper: {
        backgroundColor:"#4e7caf",
        marginTop:  "2px"
        
    }

})

const Navbar = () => {
    const classes = Usestyles();
    return (
        <>
            <div className={classes.mainWrapper}>
                <div className={classes.navWrapper}>
                    <div className={classes.searchfield}>
                        <Search placeholder="Search Here" style={{ width: 300 }} />
                    </div>

                    <div className={classes.comwrapper}>
                        <Menu mode="horizontal">                           
                            <Menu.Item key="1"> HOME </Menu.Item>
                            <Menu.Item key="2"> ABOUT </Menu.Item>
                            <Menu.Item key="3"> CONTACT </Menu.Item>
                            <Menu.Item key="4"> <a href="/Main">  LOGIN! </a></Menu.Item>
                        </Menu>

                    </div>
                </div>

                <div className={classes.carousell}>

                    <Carousel autoplay>
                        <div>
                            <img className={classes.contentStyle} src={img1} alt="abc" />
                        </div>
                        <div>
                            < img className={classes.contentStyle} src={img2} alt="abc" />
                        </div>
                        <div>
                            < img className={classes.contentStyle} src={img3} alt="abc" />
                        </div>
                        <div>
                            < img className={classes.contentStyle} src={img4} alt="abc" />
                        </div>
                        <div>
                            < img className={classes.contentStyle} src={img5} alt="abc" />
                        </div>
                    </Carousel>,

                </div>

                <div className={classes.cardWrapper}>
                    <Carddd />
                </div>
            </div>
        </>
    )
}

export default Navbar;
import { Menu } from "./Menu"
import Video1 from "./Video/video1.mp4"

export const First = (props) => {
    return (
        <>
            <div className="first">
                <div className="sec1">
                    <div className="video">
                        <video autoPlay loop muted>
                            <source src={Video1} alt="error" type="video/mp4"/>
                        </video>
                    </div>
                    <Menu />
                    <button className="btn">METAVERSE</button>
                    <div className="logo">
                        <a href="https://www.alterego-group.com/awards/">
                            <img src="https://www.alterego-group.com/img/logo_white.svg" alt="error" className="logo1" />
                            <img src="https://www.alterego-group.com/img/main_logo_text_mob.png" alt="error" className="logo2" />
                            <img src="https://www.alterego-group.com/img/main_logo_awards.png" alt="error" className="logo3" />
                            <img src="https://www.alterego-group.com/img/main_logo_awards_mob.png" alt="error" className="logo4" />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

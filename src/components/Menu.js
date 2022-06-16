
export const Menu = () => {
    const list =() =>{
        
    }
    return (
        <>
            <div className='barmenu' onClick={list} >
                <span></span>
                <span></span>
            </div>
            <div className="lang_list">
                <a href="https://www.alterego-group.com/#" className="lang">eng</a>
                <a href="https://www.alterego-group.com/#" className="lang">it</a>
                <a href="https://essence.alterego-group.com/fr/" className="lang">fr</a>
                <a href="https://essence.alterego-group.com/ar/" className="lang">عربي</a>
                <br/>
            </div>
            <div className="milan">
                <div className="rows">
                    <a href="https://www.alterego-group.com/office/milan/">
                    <span>MILAN</span>
                    </a>
                    <a href="https://www.alterego-group.com/office/monaco/">
                    <span>MONACO</span>
                    </a>
                    
                </div>
            </div>
                    <span className="bar1"></span>
                    <span className="bar2"></span>

        </>
    )
}


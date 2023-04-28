import React, { useEffect } from 'react';
import Hero from '../../components/hero';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectMiscLoading, selectMiscLoaded, selectMiscError, selectMisc, loadMisc } from '../../features/misc/miscSlice';


const AboutPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectMiscLoading);
    const error = useSelector(selectMiscError);
    const misc = useSelector(selectMisc);
    const loaded = useSelector(selectMiscLoaded);

    useEffect(() => {
        if (!loaded) {
            dispatch(loadMisc());
        }
    }, [dispatch, loaded]);

    return(
        <>
            <Hero 
                displayText="About"
                type="about"
            />
            <main className="container">
                <div style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "80ch",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    width: "100%",
                    marginBottom: "150px"
                }}>
                    <h3 style={{textAlign: "center"}}>Hi, My Name is Filip</h3>
                    <p style={{fontSize: "1.25rem"}}>
                    I'm a self-taught Software Developer with a PhD in Philosophy who powers his experience in every area of programming with a philosopher’s ability to break down, communicate and solve complex problems. I'm particularly interested in modern web development and to understand how to build code that is readable, reusable and testable - and, not least of all, <i>logically coherent</i>.
                    </p>
                    <p style={{fontSize: "1.25rem"}}>
                    I journal my discoveries, mistakes, fascinations and other things that I learn in programming and web development in my <NavLink to="/blog" style={{color: "inherit"}}>blog</NavLink>.
                    </p>
                    <p style={{fontSize: "1.25rem"}}>
                    Philosophy continues to be a significant part of my life. I teach philosophy courses at the <Link style={{color: "inherit"}} to="https://www.halkyonguild.org/academy" target="_blank">Halkyon Academy</Link>, which provides a spirited intellectual forum and mental gym at the convenience of one's home without the loss of quality. I also tutor privately for those who are philosophically intrepid and would like to tunnel deeper into a particular text. 
                    </p>
                    <p style={{fontSize: "1.25rem"}}>
                    Poetry is another meaningful enterprise for me. In 2022, I published <i>Saedah: a poem of change</i>, an epic poem of 401 verses arrayed in five parts, which can be found <Link style={{color: "inherit"}} to="https://www.amazon.com/Saedah-poem-change-Filip-Niklas/dp/B0B7QGTN9R" target="_blank">here</Link>. 
                    </p>
                    <p style={{fontSize: "1.25rem"}}>
                    Apart from these intensities, I try to live a balanced life engaging in physical- and financial fitness, going to regularly to the gym and studying rational methods of investing. When I'm off-duty, I enjoy films, series, board-games and computer strategy games. 
                    </p>
                    {!loading && !error &&
                    <p style={{fontSize: "1.25rem"}}>
                    <i>In other news: </i>{misc.currentNews}
                    </p>}
                    <h3>Want To Get in Touch? Ideas To Share or Projects to Build? <NavLink style={{color: "inherit"}} to="/contact">Just drop me a line!</NavLink></h3>
                </div>
                
            </main>
        </>
    );
};

export default AboutPage;

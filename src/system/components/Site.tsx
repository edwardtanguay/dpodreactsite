import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ShowContext from '../../context/ShowContext.jsx';
import '../styles/reset.scss';
import '../styles/site.scss';
import PageHome from '../../custom/components/PageHome';

// DYNAMIC_CODE_AREA: loadPageComponentLines
import PageShowcaseCounterUsingState from './PageShowcaseCounterUsingState'; // ::showcaseCounterUsingState
import PageShowcaseTypeScriptClasses from './PageShowcaseTypeScriptClasses';// ::showcaseTypeScriptClasses
import PageShowcaseJavaScriptComponent from './PageShowcaseJavaScriptComponent';// ::showcaseJavaScriptComponent
import PageShowcaseSqliteReader from './PageShowcaseSqliteReader';// ::showcaseSqliteReader
import PageShowcaseJsonReadWrite from './PageShowcaseJsonReadWrite';// ::showcaseJsonReadWrite
import PageDeletePage from './PageDeletePage';// ::deletePage
import PageCreatePage from './PageCreatePage';// ::createPage
import PageShowcaseNewsApi from './PageShowcaseNewsApi';// ::showcaseNewsApi
import PageDocumentation from './PageDocumentation';// ::documentation
import PageAbout from './PageAbout';// ::about

function Site() {
	const { isShowing, setIsShowing } = useContext(ShowContext);

	const showHandler = () => {
		setIsShowing((prevIsShowing: boolean) => !prevIsShowing);
	};

	const showToggle = false;

	return (
		<Router>
			<div className='app_site'>
				<div className="topHeader">
					<h1 className='siteTitle'>Datapod for React</h1>
					{showToggle && (
						<div className='menuToggle'>
							<label htmlFor='myToggle' className='toggle'>
								<input
									className='toggle_input'
									type='checkbox'
									id='myToggle'
									checked={isShowing}
									onChange={showHandler}
								/>
								<div className='toggle_fill'></div>
							</label>
						</div>
					)}
				</div>
				<nav>
					<span><Link to='/'>Download</Link></span>
					<span><Link to='/documentation'>Documentation</Link></span>{/* ::documentation */}
					<span><Link to='/about'>About</Link></span>{/* ::about */}
					{isShowing && (
						<>
							{/* DYNAMIC_JSX_AREA: linkPageComponentLines */}
							<span><Link to='/createPage'>Create Page</Link></span>{/* ::createPage */}
							<span><Link to='/deletePage'>Delete Page</Link></span>{/* ::deletePage */}
							<span><Link to='/showcaseCounterUsingState'>Showcase: Counter Using State</Link></span> {/* ::showcaseCounterUsingState */}
							<span><Link to='/showcaseTypeScriptClasses'>Showcase: TypeScript Classes</Link></span>{/* ::showcaseTypeScriptClasses */}
							<span><Link to='/showcaseJavaScriptComponent'>Showcase: JavaScript Component</Link></span>{/* ::showcaseJavaScriptComponent */}
							<span><Link to='/showcaseSqliteReader'>Showcase: SQLite Reader</Link></span>{/* ::showcaseSqliteReader */}
							<span><Link to='/showcaseJsonReadWrite'>Showcase: JSON Read/Write</Link></span>{/* ::showcaseJsonReadWrite */}
							<span><Link to='/showcaseNewsApi'>Showcase: News Api</Link></span>{/* ::showcaseNewsApi */}
						</>
					)}
				</nav>

				<section className='app_container'>
					<Switch>
						<Route exact path='/'>
							<PageHome />
						</Route>
						{/* DYNAMIC_JSX_AREA: routePageComponentLines */}
						<Route path='/showcaseCounterUsingState'><PageShowcaseCounterUsingState /></Route> {/* ::showcaseCounterUsingState */}
						<Route path='/showcaseTypeScriptClasses'><PageShowcaseTypeScriptClasses /></Route>{/* ::showcaseTypeScriptClasses */}
						<Route path='/showcaseJavaScriptComponent'><PageShowcaseJavaScriptComponent /></Route>{/* ::showcaseJavaScriptComponent */}
						<Route path='/showcaseSqliteReader'><PageShowcaseSqliteReader /></Route>{/* ::showcaseSqliteReader */}
						<Route path='/showcaseJsonReadWrite'><PageShowcaseJsonReadWrite /></Route>{/* ::showcaseJsonReadWrite */}
						<Route path='/deletePage'><PageDeletePage /></Route>{/* ::deletePage */}
						<Route path='/createPage'><PageCreatePage /></Route>{/* ::createPage */}
						<Route path='/showcaseNewsApi'><PageShowcaseNewsApi /></Route>{/* ::showcaseNewsApi */}
						<Route path='/documentation'><PageDocumentation /></Route>{/* ::documentation */}
						<Route path='/about'><PageAbout /></Route>{/* ::about */}
					</Switch>
				</section>
			</div>
		</Router>
	);
}

export default Site;

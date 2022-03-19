import '../styles/pageHome.scss';

function PageHome() {

	return (
		<div className="page page_home">
			<h2 className="title2">Download</h2>

			<ul>
				<li><span className="version">2021-09-18 - <b>Version 0.00.01</b> - <a href="downloads/dpodreact00001.zip">dpodreact00001.zip</a></span>

					<ul>
						<li>allows you to create and delete three different kinds of fully-functioning React-Router pages (React components) in seconds using code-generation</li>
						<li>MVC pattern implemented so frontend pages can call custom backend actions on the page's controller which run in Node</li>
						<li>create MVC controller-pages (React components) for local websites with which you can access e.g. your local harddrive from Node via the frontend</li>
						<li>create frontend-only pages to make pages that run at Netlify with one-step publish</li>
						<li>uses TypeScript and SASS</li>
					</ul>
				</li>
			</ul>

			<div className="notice">
				The <b>Datpod-for-React</b> project was relaunched March 2022. Please view the <a href="https://github.com/edwardtanguay/dpodreactcore#datapod-roadmap">Datapod Roadmap</a> and get an overview of the <a href="https://github.com/edwardtanguay">three projects</a> (dpodreactcore, dpodreact, and dpodreactsite).
			</div>
		</div>
	)
}

export default PageHome;
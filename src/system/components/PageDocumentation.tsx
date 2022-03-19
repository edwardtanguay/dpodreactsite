import '../styles/page_documentation.scss';

function PageDocumentation() {

	return (
		<div className="page page_documentation">
			<h2 className="title2">Documentation</h2>
			<h3>Installation</h3>
			<ul>
				<li>download the <code>.zip</code> file</li>
				<li>unzip and copy the files to a directory</li>
				<li><code>npm i</code></li>
				<li><code>npm start</code></li>
				<li><code>npm run backend</code></li>
			</ul>
		</div>
	)
}

export default PageDocumentation;
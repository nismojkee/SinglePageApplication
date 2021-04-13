import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle("Posts");
	};

	async getHtml() {
		return `
			<h1>Posts</h1>
			<p>
				You are viewing a posts list
			</p>
			<p>
				<a href="/posts/1" data-link>Some Post</a>
			</p>
			<p>
				<a href="/posts/2" data-link>Some Post 2</a>
			</p>
		`;
	};
}
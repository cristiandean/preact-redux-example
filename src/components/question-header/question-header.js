import { h, Component } from 'preact';

export default class QuestionHeader extends Component {
	remove = () => {
		let { onRemove, todo } = this.props;
		onRemove(todo);
	};

	shouldComponentUpdate({ todo, onRemove }) {
		return todo !== this.props.todo || onRemove !== this.props.onRemove;
	}

	render({ title, picture }) {
		return (
			<div className="question-header">
				<img className="question-media" src={picture} />
				<div className="question-title">{title}</div>
			</div>
		);
	}
}

import { Component } from 'preact';
import { connect } from 'preact-redux';
import * as actions from '../../actions';
import reduce from '../../reducers';

@connect(reduce, actions)
export default class Answer extends Component {

	constructor(props) {
		super(props);
		this.state = { answered: false };
	}

	_questionAnswered = (questionId, answerId) => {
		return this.props.answers.filter(answer => answer.questionId == questionId && answer.answerId == answerId).length
	}


	_isCorrect = (answer) => {
		if (this.props.answers == null || this.props.questionId in this.props.answers == false)
			return "answer";

		if (this.props.answers[this.props.questionId] == answer.id && !answer.correct)
			return "answer incorrect";

		if (answer.correct)
			return "answer correct";

		return "answer";
	}

	reply = (questionId, answerId) => {
		if (this.props.answers && this.props.questionId in this.props.answers)
			return;
		this.props.updateAnswers({ questionId, answerId });
		this.setState({ answered: true })
	};

	render({ answer, questionId }) {
		return (
			<li key={answer.id} onClick={this.reply.bind(this, questionId, answer.id)} className={this._isCorrect(answer)}>
				{answer.title}
			</li>
		);
	}
}

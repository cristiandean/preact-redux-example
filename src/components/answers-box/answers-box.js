import { Component } from 'preact';
import Answer from '../answer/answer';

export default class AnswersBox extends Component {

	render({ answers, questionId }) {
		return (
			<ul className="answer-box">
				{
					answers.map(answer => (
						<Answer questionId={questionId} key={answer.id} answer={answer} />
					))
				}
			</ul>
		);
	}
}

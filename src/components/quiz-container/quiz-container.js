import { Component } from 'preact';
import { connect } from 'preact-redux';
import * as actions from '../../actions';
import reduce from '../../reducers';
import QuestionBox from '../question-box/question-box'

@connect(reduce, actions)
export default class QuizContainer extends Component {
	render({ quiz }) {
		return (
			<div className="quiz-container">
				<div className="quiz-title">{quiz.title}</div>
				{quiz.questions.map(question => (
					<QuestionBox key={question.id} question={question} />
				))}
			</div>
		);
	}
}

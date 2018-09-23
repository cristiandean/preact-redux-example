import { Component } from 'preact';
import { connect } from 'preact-redux';
import * as actions from '../../actions';
import reduce from '../../reducers';
import AnswersBox from '../answers-box/answers-box';
import QuestionFooter from '../question-footer/question-footer';
import QuestionHeader from '../question-header/question-header';

@connect(reduce, actions)
export default class QuestionBox extends Component {

	render({ question }) {
		return (
			<div className="question-box">
				<QuestionHeader title={question.title} picture={question.picture} />
				<AnswersBox answers={question.answers} questionId={question.id} />
				<QuestionFooter question={question} />
			</div>
		);
	}
}


export function updateAnswers(answer) {
	let answerUpdated = {
		type: 'UPDATE_ANSWERS',
		answer: {}
	};
	answerUpdated.answer[answer.questionId] = answer.answerId;
	return answerUpdated;
}

export function removeTodo(todo) {
	return {
		type: 'REMOVE_TODO',
		todo
	};
}

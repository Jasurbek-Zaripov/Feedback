import { Schema, model } from 'mongoose';

const schema = new Schema({
    author: { type: 'string', required: true },
    title: { type: 'string', required: [true, 'Title empty!'], maxlength: [150, 'Title is too long!'], minlength: [2, 'Title is too short!'] },
    description: { type: 'string', required: [true, 'Description empty!'], maxlength: [300, 'Description is too long!'], minlength: [4, 'Description is too short!'] },
    category: { type: 'string' },
    like: { type: 'number', default: 0, required: true },
    count_comment: { type: 'number', default: 0, required: true },
    State: { type: ['Planned', 'InProgress', 'Live'], default: 'Planned' },
    created_at: { type: Schema.Types.Date, default: Date.now }
});

const suggModel = model('Suggestion', schema);
export { suggModel };
import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
	normalizeResponse (store, primaryModelClass, payload, id, requestType){
		return {
			data: payload.data.children.map((info)=> {
				return {
					id: info.data.id,
					type: 'r',
					attributes: info.data
				}
			})
		};
		//return this._super(...arguments);
	}
});

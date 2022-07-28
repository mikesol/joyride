import {
	uniqueNamesGenerator,
	adjectives,
	animals,
} from "unique-names-generator";

export const randomName = () =>
	uniqueNamesGenerator({
		dictionaries: [adjectives, animals],
		separator: "-",
	});

import * as filestack from "filestack-js";

export const init = () => filestack.init("ArcQnSXbqT4O0OORDyYxrz");

export const picker =
	(cancel) => (failure) => (progress) => (success) => (client) => () =>
		client
			.picker({
				onFileUploadCancel: (metadata) => cancel(metadata)(),
				onFileUploadFailed: (metadata, err) => failure(metadata)(err)(),
				onFileUploadProgress: (metadata, event) => progress(metadata)(event)(),
				onFileUploadFinished: (metadata) => success(metadata)(),
			})
			.open();

export const pickerAccepting =
	(accept) => (cancel) => (failure) => (progress) => (success) => (client) => () =>
		client
			.picker({
				accept,
				onFileUploadCancel: (metadata) => cancel(metadata)(),
				onFileUploadFailed: (metadata, err) => failure(metadata)(err)(),
				onFileUploadProgress: (metadata, event) => progress(metadata)(event)(),
				onFileUploadFinished: (metadata) => success(metadata)(),
			})
			.open();

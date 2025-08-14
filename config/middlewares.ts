export default [
	"strapi::logger",
	"strapi::errors",
	"strapi::security",
	"strapi::cors",
	"strapi::poweredBy",
	"strapi::query",
	{
		name: "strapi::body",
		config: {
			formLimit: "200mb", // Increase form limit
			jsonLimit: "200mb", // Increase JSON limit
			textLimit: "200mb", // Increase text limit
			formidable: {
				maxFileSize: 200 * 1024 * 1024, // 200MB in bytes
			},
		},
	},
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];

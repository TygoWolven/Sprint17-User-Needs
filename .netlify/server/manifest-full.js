export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Epilogue-Italic-VariableFont_wght.ttf","fonts/Epilogue-VariableFont_wght.ttf","global.css","header-image-large.jpg","header-image-large.webp","header-image-medium.jpg","header-image-medium.webp","header-image-small.jpg","header-image-small.webp","hero-image-background.webp","marker.svg","Mock-image.jpg","Mock-image2.webp"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".css":"text/css",".jpg":"image/jpeg",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.B0_beNJT.js","app":"_app/immutable/entry/app.wMzOSA2Z.js","imports":["_app/immutable/entry/start.B0_beNJT.js","_app/immutable/chunks/entry.D8f4ubcG.js","_app/immutable/chunks/scheduler.BA4jtMEb.js","_app/immutable/entry/app.wMzOSA2Z.js","_app/immutable/chunks/scheduler.BA4jtMEb.js","_app/immutable/chunks/index.MnhX1xUw.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[slug]/[slug]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

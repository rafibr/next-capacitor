import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.meditab.mobile',
	appName: 'Meditab Mobile',
	webDir: 'out',
	bundledWebRuntime: false,
	server: {
		url: 'http://192.168.1.4:3000',
		cleartext: true
	}
};

export default config;

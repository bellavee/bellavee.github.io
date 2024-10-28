import { base } from "$app/paths";

export const getImageUrl = (fileName) => {
	if (!fileName) {
		return "";
	}

	return `${base}/img/${fileName}`;
};

export const parsePriceInput = (input) => {
	const result = /^(\d+)([kK])?$/.exec(input);
	if (result) {
		const number = parseInt(result[1], 10);
		const multiplier = result[2] ? 1000 : 1;
		return number * multiplier;
	}
	return 0;
};


const isDark = (color) => {
	const r = parseInt(color.slice(1, 3), 16);
	const g = parseInt(color.slice(3, 5), 16);
	const b = parseInt(color.slice(5, 7), 16);
	const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
	return luminance < 145;
};

export const setTextColor = (bgColor) => {
	return isDark(bgColor) ? '#fff' : '#1c1c1f';
};

export const formatPrice = (price) => {
	return new Intl.NumberFormat('vi-VN', { style: 'decimal', minimumFractionDigits: 0 }).format(price) + ' vnđ';
};


export const formatDate = (date) => {
	const options = {
		timeZone: 'Asia/Ho_Chi_Minh',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false // 24-hour format
	};

	return new Date(date).toLocaleString('vi-VN', options).replace(',', '');
};

export const formatDateParis = (date) => {
	const options = {
		timeZone: 'Europe/Paris',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false // 24-hour format
	};

	return new Date(date).toLocaleString('fr-FR', options).replace(',', '');
};

export const formatDateVietnam = (dateString) => {
	const date = new Date(dateString);
	// Adjust to Vietnam time (UTC+7)
	date.setHours(date.getHours() + 7);
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
}

export const convertToUTC = (dateString) => {
	const date = new Date(dateString);
	date.setHours(date.getHours() - 7);
	return date.toISOString();
}

export function validateEmail(email) {
	if (!email) return { isValid: false, message: 'Vui lòng nhập email' };

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) return { isValid: false, message: 'Email không hợp lệ, vui lòng kiểm tra lại' };

	const [, domain] = email.split('@');
	const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
	const commonTLDs = ['com', 'org', 'net', 'edu'];

	const domainParts = domain.split('.');
	if (domainParts.length === 2) {
		const [domainName, tld] = domainParts;

		const matchedDomain = commonDomains.find(d => d.startsWith(domainName));
		if (matchedDomain && tld !== matchedDomain.split('.')[1]) {
			return { isValid: false, message: `Sai định dạng email, có phải là @${matchedDomain}?` };
		}

		if (!commonTLDs.includes(tld)) {
			const closestTLD = commonTLDs.find(t => t.startsWith(tld[0]));
			if (closestTLD) {
				return { isValid: false, message: `Sai định dạng email, có phải là ${domainName}.${closestTLD}?` };
			}
		}
	}

	if (commonDomains.includes(domain)) {
		const domainSpecificRegex = new RegExp(`@${domain}$`);
		if (!domainSpecificRegex.test(email)) {
			return { isValid: false, message: `Invalid email format for ${domain}` };
		}
	}

	return { isValid: true, message: '' };
}
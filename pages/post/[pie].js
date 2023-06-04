import { useRouter } from 'next/router';

// export const Post = () => {
	export default function Post(){
	const router = useRouter();
	const { pie } = router.query;
	return <p>pie: { pie }</p>
}
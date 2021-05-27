import { useState } from "react";
import { useAuth } from "../../util/auth";
import useLoginRedirect from "../../util/useLoginRedirect";

function LoginPage() {
	const auth = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// custom hook redirects to previous page or default page if user is logged in
	useLoginRedirect();

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		if (!password || password.length < 8) {
			return alert("Invalid password. Must contain at least 8 characters.");
		}
		if (!email) {
			return alert("Must provide an email address.");
		}
		await auth.login({ email, password });
	};

	const message = auth.pending
		? "Processing request..."
		: auth.error || "Please complete the form and click submit.";

	return (
		<div className="flex flex-col max-w-md p-12 rounded sm:p-10 bg-gray-100 text-coolGray-800 mx-auto my-12 shadow-xl">
			<div className="mb-8 text-center">
				<h1 className="my-3 text-4xl font-bold">Login</h1>
				<p className="text-sm text-coolGray-600">Login to access your account</p>
			</div>
			<form
				className="space-y-8 ng-untouched ng-pristine ng-valid"
				onSubmit={handleSubmit}
			>
				<div className="space-y-4">
					<div>
						<label className="block mb-2 text-sm" htmlFor="email">
							Email
						</label>
						<input
							className="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
							id="email"
							type="email"
							disabled={auth.pending}
							value={email}
							onChange={(e) => setEmail(e.target.value.trim())}
						/>
					</div>
					<div>
						<div className="mb-2">
							<label className="text-sm" htmlFor="password">
								Password
							</label>
							<input
								className="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
								id="password"
								type="password"
								disabled={auth.pending}
								value={password}
								onChange={(e) => setPassword(e.target.value.trim())}
							/>
						</div>
					</div>
				</div>
				<button
					className="w-full px-8 py-3 rounded-md bg-gray-900 text-white"
					type="submit"
					disabled={auth.pending}
				>
					{auth.pending ? "⌛" : "Submit"}
				</button>
			</form>
			<div className="mt-3 px-6 text-sm text-center text-coolGray-600 space-y-0">
				<p className="mb-3">{message}</p>
				<p>
					Don't have an account yet?{" "}
					<a href="/signup" className="hover:underline text-violet-600">
						Sign up
					</a>
					.
				</p>
			</div>
		</div>
	);
}

export default LoginPage;

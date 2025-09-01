import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, type FormEvent } from "react";
import { ShineBorder } from "@/components/magicui/shine-border";

const Contact = () => {
	const apiUrl = import.meta.env.VITE_WEB3FORMS_API_URL;
	const apiKey = import.meta.env.VITE_WEB3FORMS_API_KEY;

	const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);
	const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

	const SendEmail = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);
		const errors: { [key: string]: string } = {};

		// Extract fields
		const name = formData.get("name")?.toString().trim() || "";
		const email = formData.get("email")?.toString().trim() || "";
		const message = formData.get("message")?.toString().trim() || "";

		// Validate
		if (!name) errors.name = "Name is required.";
		if (!email) errors.email = "Email is required.";
		else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Invalid email format.";
		if (!message) errors.message = "Message is required.";

		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			return;
		}

		setFormErrors({});

		const customSubject = `A visitor sent a message from website`;
		const additionalData = {
			access_key: apiKey,
			from_name: name,
			subject: customSubject,
		};

		for (const [key, value] of Object.entries(additionalData)) {
			formData.append(key, value);
		}

		const json = JSON.stringify(Object.fromEntries(formData));
		if (import.meta.env.DEV) {
			console.log(json);
		}

		try {
			const res = await fetch(apiUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: json,
			}).then((res) => res.json());

			if (res.success) {
				console.log("Success", res);
				form.reset();
				setSubmissionStatus("success");
			} else {
				setSubmissionStatus("error");
			}
		} catch (err) {
			console.error("Error submitting form:", err);
			setSubmissionStatus("error");
		}
	};

	return (
		<section id="contact" className="relative my-10 flex items-center justify-center p-10 md:my-10">
			<Card className="relative w-full max-w-md overflow-hidden shadow-lg">
				<ShineBorder shineColor={["#4ade80", "#f59e0b", "#14b8a6"]} />
				<CardHeader>
					<CardTitle className="text-2xl font-semibold">Get in Touch</CardTitle>
					<CardDescription>Feel free to reach out for collabs, questions, or just to say hi!</CardDescription>
				</CardHeader>
				<CardContent>
					<form className="w-full" onSubmit={SendEmail} noValidate>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="name">Name</Label>
								<div>
									<Input
										id="name"
										name="name"
										type="text"
										placeholder="Enter your name"
										autoComplete="name"
										className={formErrors.name ? "border-red-500" : ""}
										required
									/>
									{formErrors.name && (
										<p className="mt-1 pl-1 text-xs text-red-500">{formErrors.name}</p>
									)}
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<div>
									<Input
										id="email"
										name="email"
										type="email"
										placeholder="john.doe@example.com"
										autoComplete="email"
										className={formErrors.email ? "border-red-500" : ""}
										required
									/>
									{formErrors.email && (
										<p className="mt-1 pl-1 text-xs text-red-500">{formErrors.email}</p>
									)}
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="summary">Subject</Label>
								<Input
									id="summary"
									name="summary"
									type="text"
									autoComplete="summary"
									placeholder="What's this about?"
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="message">Message</Label>
								</div>
								<div>
									<Textarea
										id="message"
										name="message"
										autoComplete="message"
										placeholder="Tell me what you’d like to connect for"
										className={formErrors.message ? "border-red-500" : ""}
										required
									/>
									{formErrors.message && (
										<p className="mt-1 pl-1 text-xs text-red-500">{formErrors.message}</p>
									)}
									<p className="text-muted-foreground mt-0.5 text-xs">
										I typically respond within 2-3 days. Thanks for reaching out!
									</p>
								</div>
							</div>
						</div>

						<div className="mt-6">
							<Button type="submit" className="w-full">
								Send Message
							</Button>
						</div>
					</form>

					{submissionStatus === "success" && (
						<div className="mt-2 flex items-center justify-center text-green-500">
							<svg
								className="mr-2 h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
							Your message was successfully submitted!
						</div>
					)}

					{submissionStatus === "error" && (
						<div className="mt-2 flex items-center justify-center text-red-500">
							<svg
								className="mr-2 h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
							There was an error submitting your message.
						</div>
					)}
				</CardContent>
				<CardFooter></CardFooter>
			</Card>
		</section>
	);
};

export default Contact;

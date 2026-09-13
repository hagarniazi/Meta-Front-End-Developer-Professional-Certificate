import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const ContactSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid email address"),
  type: Yup.string().required("Required"),
  comment: Yup.string()
    .required("Required")
    .min(25, "Must be at least 25 characters"),
});

function ContactMe() {
  const [alertInfo, setAlertInfo] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: ContactSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setAlertInfo(null);

      // Simulated server call — 50/50 chance of success or failure.
      setTimeout(() => {
        const isSuccess = Math.random() < 0.5;

        if (isSuccess) {
          setAlertInfo({
            status: "success",
            title: "All good!",
            description: `Thanks for your submission ${values.firstName}, we will get back to you shortly!`,
          });
          resetForm();
        } else {
          setAlertInfo({
            status: "error",
            title: "Oops",
            description: "Something went wrong, please try again later",
          });
        }

        setSubmitting(false);
      }, 1500);
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
    <Box
      id="contactme"
      as="section"
      bg="gray.50"
      py={20}
      px={4}
      scrollMarginTop="80px"
    >
      <Box maxW="560px" mx="auto">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Contact me
        </Heading>

        <form onSubmit={handleSubmit} noValidate>
          <VStack spacing={5} align="stretch">
            <FormControl isInvalid={Boolean(errors.firstName && touched.firstName)}>
              <FormLabel htmlFor="firstName">Name</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                bg="white"
              />
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.email && touched.email)}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                bg="white"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.type && touched.type)}>
              <FormLabel htmlFor="type">Type of enquiry</FormLabel>
              <Select
                id="type"
                name="type"
                placeholder="Select an option"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                bg="white"
              >
                <option value="freelance">Freelance project</option>
                <option value="fulltime">Full-time opportunity</option>
                <option value="opensource">Open-source collaboration</option>
                <option value="other">Other</option>
              </Select>
              <FormErrorMessage>{errors.type}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.comment && touched.comment)}>
              <FormLabel htmlFor="comment">Your Message</FormLabel>
              <Textarea
                id="comment"
                name="comment"
                rows={5}
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                bg="white"
              />
              <FormErrorMessage>{errors.comment}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              isLoading={isSubmitting}
              loadingText="Submitting"
              size="lg"
            >
              Submit
            </Button>

            {alertInfo && (
              <Alert status={alertInfo.status} borderRadius="md">
                <AlertIcon />
                <Box>
                  <AlertTitle>{alertInfo.title}</AlertTitle>
                  <AlertDescription>{alertInfo.description}</AlertDescription>
                </Box>
              </Alert>
            )}
          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export default ContactMe;

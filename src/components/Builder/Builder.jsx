import React from "react";
import "./Builder.css";
import { Field, FieldArray, Form, Formik } from "formik";

const Builder = ({setTitle}) => {
  return (
    <div className="builder">
      <Formik
        initialValues={{
          title: "",
          description: "",
          QandAs: [{ question: "", answerOptions: [""] }],
        }}
        onSubmit={(values) => {
          window.alert(JSON.stringify(values, null, 2));
        }}
        render={({ values }) => (
          <Form>
            <div className="builder_header">
              <label htmlFor="title">Title:</label>
              <Field id="title" name="title" />
              <label htmlFor="description">Description:</label>
              <Field id="description" name="description" />
            </div>

            <div className="builder_body">
              <FieldArray
                name="QandAs"
                render={(arrayHelpers) => (
                  <div>
                    {values.QandAs.map((QandA, index) => (
                      <div key={index}>
                        <label htmlFor={`QandAs.${index}.question`}>
                          Question:
                        </label>
                        <Field name={`QandAs.${index}.question`} />
                        <FieldArray
                          name={`QandAs.${index}.answerOptions`}
                          render={(arrayHelpers) => (
                            <div>
                              {QandA.answerOptions.map(
                                (option, optionIndex) => (
                                  <div key={optionIndex}>
                                    <Field
                                      name={`QandAs.${index}.answerOptions.${optionIndex}`}
                                    />
                                    <button
                                      type="button"
                                      onClick={() =>
                                        arrayHelpers.remove(optionIndex)
                                      }
                                    >
                                      -
                                    </button>
                                  </div>
                                )
                              )}
                              <button
                                type="button"
                                onClick={() => arrayHelpers.push("")}
                              >
                                Add Answer Option
                              </button>
                            </div>
                          )}
                        />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove Question
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({ question: "", answerOptions: [""] })
                      }
                    >
                      Add Question
                    </button>
                  </div>
                )}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      />
    </div>
  );
};

export default Builder;

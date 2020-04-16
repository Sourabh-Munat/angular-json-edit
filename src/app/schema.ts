export const schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "array",
    "title": "The Root Schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": [],
    "additionalItems": true,
    "items": {
        "$id": "#/items",
        "type": "object",
        "title": "The Items Schema",
        "description": "An explanation about the purpose of this instance.",
        "default": {},
        "examples": [
            {
                "missingIntent": {
                    "session_variables": null,
                    "event_names": null,
                    "task_names": "STUDENT_LOAN_AGENT"
                },
                "matchIntent": {
                    "task_names": null,
                    "session_variables": null,
                    "event_names": [
                        "LIVE_AGENT"
                    ]
                },
                "comment": "case 1 -  LIVE_AGENT when student loan is present in hypothesis",
                "phrasePatterns": [
                    "student loan"
                ]
            },
            {
                "matchIntent": {
                    "task_names": null,
                    "session_variables": [
                        "FORCE_FAIL:true"
                    ],
                    "event_names": null
                },
                "comment": "case 2 - simple rejection of any result when sv FORCE_FAIL:true",
                "phrasePatterns": [],
                "missingIntent": {}
            }
        ],
        "additionalProperties": true,
        "required": [
            "comment",
            "matchIntent",
            "phrasePatterns",
            "missingIntent"
        ],
        "properties": {
            "comment": {
                "$id": "#/items/properties/comment",
                "type": "string",
                "title": "The Comment Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": "",
                "examples": [
                    "case 1 -  LIVE_AGENT when student loan is present in hypothesis"
                ]
            },
            "matchIntent": {
                "$id": "#/items/properties/matchIntent",
                "type": "object",
                "title": "The Matchintent Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": {},
                "examples": [
                    {
                        "task_names": null,
                        "session_variables": null,
                        "event_names": [
                            "LIVE_AGENT"
                        ]
                    }
                ],
                "additionalProperties": true,
                "required": [
                    "session_variables",
                    "event_names",
                    "task_names"
                ],
                "properties": {
                    "session_variables": {
                        "$id": "#/items/properties/matchIntent/properties/session_variables",
                        "type": "null",
                        "title": "The Session_variables Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": null,
                        "examples": [
                            null
                        ]
                    },
                    "event_names": {
                        "$id": "#/items/properties/matchIntent/properties/event_names",
                        "type": "array",
                        "title": "The Event_names Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": [],
                        "examples": [
                            [
                                "LIVE_AGENT"
                            ]
                        ],
                        "additionalItems": true,
                        "items": {
                            "$id": "#/items/properties/matchIntent/properties/event_names/items",
                            "type": "string",
                            "title": "The Items Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": "",
                            "examples": [
                                "LIVE_AGENT"
                            ]
                        }
                    },
                    "task_names": {
                        "$id": "#/items/properties/matchIntent/properties/task_names",
                        "type": "null",
                        "title": "The Task_names Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": null,
                        "examples": [
                            null
                        ]
                    }
                }
            },
            "phrasePatterns": {
                "$id": "#/items/properties/phrasePatterns",
                "type": "array",
                "title": "The Phrasepatterns Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": [],
                "examples": [
                    [
                        "student loan"
                    ]
                ],
                "additionalItems": true,
                "items": {
                    "$id": "#/items/properties/phrasePatterns/items",
                    "type": "string",
                    "title": "The Items Schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "student loan"
                    ]
                }
            },
            "missingIntent": {
                "$id": "#/items/properties/missingIntent",
                "type": "object",
                "title": "The Missingintent Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": {},
                "examples": [
                    {
                        "session_variables": null,
                        "event_names": null,
                        "task_names": "STUDENT_LOAN_AGENT"
                    }
                ],
                "additionalProperties": true,
                "required": [
                    "session_variables",
                    "event_names",
                    "task_names"
                ],
                "properties": {
                    "session_variables": {
                        "$id": "#/items/properties/missingIntent/properties/session_variables",
                        "type": "null",
                        "title": "The Session_variables Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": null,
                        "examples": [
                            null
                        ]
                    },
                    "event_names": {
                        "$id": "#/items/properties/missingIntent/properties/event_names",
                        "type": "null",
                        "title": "The Event_names Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": null,
                        "examples": [
                            null
                        ]
                    },
                    "task_names": {
                        "$id": "#/items/properties/missingIntent/properties/task_names",
                        "type": "string",
                        "title": "The Task_names Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "STUDENT_LOAN_AGENT"
                        ]
                    }
                }
            }
        }
    }
};
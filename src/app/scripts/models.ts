/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
export var models = {
    "String": {
        "type": "string"
    },
    "Number": {
        "type": "number"
    },
    "Any": {
        "type": "any"
    },
    "Function": {
        "type": "Function"
    },
    "Promise": {
        "type": "Promise"
    },
    "Boolean": {
        "type": "boolean"
    },
    "Observable": {
        "type": "Observable"
    },
    "test_test_read_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "http://localhost/rest/1/db/collections/test/{_id}"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{test_settings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "_createdAt": {
                                        "type": "string"
                                    },
                                    "_updatedAt": {
                                        "type": "string"
                                    },
                                    "test3": {
                                        "type": "string"
                                    },
                                    "acl": {
                                        "type": "object",
                                        "properties": {}
                                    },
                                    "test2": {
                                        "type": "string"
                                    },
                                    "test": {
                                        "type": "string"
                                    },
                                    "_id": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    }
};
/**
 * Data storage
 */
export const _aioDefStorageValues = {
    variables: {
    },
    storages: {
    },
    functions: {
    }
}
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Error enums that can be returned when there has been an error with mutating application resource
 */
export enum ApplicationMutationError {
	VALIDATE_INPUT = "VALIDATE_INPUT",
	SURPASSED_BASE_LIMITS = "SURPASSED_BASE_LIMITS",
	SURPASSED_TOTAL_LIMITS = "SURPASSED_TOTAL_LIMITS",
	LOCATION_NOT_ALLOWED = "LOCATION_NOT_ALLOWED",
	LOCATION_SURPASSED_BASE_LIMITS = "LOCATION_SURPASSED_BASE_LIMITS",
}

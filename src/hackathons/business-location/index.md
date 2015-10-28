---
layout: layout.hbs
---

# Hackathon - Business Locations

You are approached by a business developer to get advice on where to build a
new store in Phoenix, AZ. There are currently six candidates. Use the Yelp
dataset and come up with your own scoring scheme to identify the best location
to recommend.

## Report

[Read the Report](report.html)

## Business Types
As a team, choose one of the following business types to work on:

- A new full-service daycare center
- A new full-service car wash
- A new 24-hours gym
- A new 24-hours diner
- A new swimming pool
- A new organic food store
- A new sushi buffet

## Scoring Method

For this hackathon, you will use a scoring method that is based on a series of
20 Yes/No questions that can be applied to each candidate location. The candidate
location that has the most number of Yes's is the most viable location.

Each Yes/No question generally should take on the form of

  _Does the location have X nearby?_

where X is a feature that you think would be useful for the business to be viable.

Two examples of such questions are:
1. Does the location have _at least one McDonald's within one mile_?
1. Does the location have _at least ten businesses with 100 or more reviews within one mile_?

## Coding

Implement scoring functions and visualize how these candidate locations are
scored. The skeleton code is provided for you in [report.html](report.html).

## Grading

Each person must implement at least two questions to receive credits for this
hackathon.

## Submissions

### Business Type

Our team chose to analyze candidate locations for (fill in the business type).

### Contributors

The team members who contributed to this hackathon are:

- Heather Witte
- Denis Kazakov
- Kari Santos
- Fadhil Suhendi
- Zach Lamb

### 20 Questions

Our team came up with the following relevant questions:

1. Are there other 24-hour diners located within 2 kilometers?  (Zach)

  You don't want to be too close to another 24-hour restaurant

1. Are there any 24-hour non-restaurant businesses within 2 kilometers? (Kari)

  You want to be near other places that are open 24-hours/day.

1. Are there any clubs within 2 kilometers? 

  You want to be near the night-life of the city.

4. Are there any bars within 2 kilometers?

	You want to be near the night-life of the city.

5. Are there any music venues within 2 kilometers?

	You want to be near the night-life of the city.

6. Are there any movie theaters within 2 kilometers? (no movie theaters)

	You want to be near the night-life of the city.

7. Are there any 3-star -or-less establishments within 2 kilometers?

	You don't want highly-rated competition nearby. 

8. Are there any low price-range (1) restaurants within 2 kilometers? (Heather)
	
	Diners are inexpensive establishments, so you want to be near other inexpensive establishments

9. Are there any thrift stores within 2 kilometers?

	Thrift stores and diners go hand-in-hand.

10. Are there any colleges/universities within 2 kilometers?

	College students are up late at night.

11. Are there dive bars and no wine bars within 2 kilometers?

	Diners are divey, and not classy (like wine bars), so you want to be near similar establishments.

12. Are there hospitals within 2 kilometers? (Heather) 

	Hospitals are 24-hour operations; employees and people visiting sick loved-ones may want to eat chili cheese fries at 3 am.

13. Are there hotels within 2 kilometers?

	People vising Phoenix from out of town may want something to eat when they arrive to/leave town late at night.

14. Are there retirement homes within 2 kilometers? (1 retirement)

	The nostalgia of diners from the 50s will attract an older demographic.

15. Are there trendy/upscale establishments within 2 kilometers?

	Diners are not upscale, so you don't want to be located in an upscale neighborhood. 

16. Are there establishments that serve alcohol within 2 kilometers?

	After drinking, people may want to get something to eat.

17. Are there dry cleaning/laundry businesses within 2 kilometers?

	When people do their laundry late at night, they may get hungry.

18. Are there elementary/high schools within 2 kilometers? 

19. Do establishments within 2 kilometers require formal attire? 

20. Are there a lot of nightlife establishments nearby?
	
	You want to be near the night-life of the city.

21. Are there dive bars within 2 kilometers?

22. Are there religious organizations within 2 kilometers?

23. Are there establishments good for "late night" nearby?


### Conclusion

Our team collectively has implemented (N) scoring functions. Based on
the scores, our team recommends location (1, 2, 3, 4, 5, or 6 from west to east),
because it receives (m) out of (N) possible scores.

Heather implemented 4 scoring functions. Based on the scores, she recommends location 3 because it received 4 out of 4 possible scores.

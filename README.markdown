# JavaScript Shamir Secret Sharing
A JavaScript library for [Shamir Secret Sharing](http://en.wikipedia.org/wiki/Shamir's_Secret_Sharing).

## Compiling
Running GNU `make` will no arguments will generate `jsss.js`, perform all tests and minify to `jsss.min.js` using UglifyJS.

    $ make

To only generate the human readable `jsss.js`, use:

    $ make jsss.js

An to perform tests without minifying:

    $ make test

## Using
Include `jsss.js` or `jsss.min.js` in your code. For an HTML file:
    
    <script src="jsss.js" type="text/javascript" charset="utf-8"></script>
    
### Generating Shares
SecretSharing#generate takes the data (a number, BigInteger, or any String that BigInteger can parse), number of shares (int) and threshold (int):

    SecretSharing.generate("0xf87db6f54", 10, 7);

The call will split the data into pieces <= 2^16, and return dictionary of the form:

    {
      data: [piece_0, piece_1,...],
      shares: [[share0_0, share0_1,...], [share1_0, share1_1,...],...]
    }

The elements in the data array are `BigInteger`s, as are the sub-elements in each of the arrays in the `shares` array.

### Reconstructing Data
To reconstruct the original data, pass to `SecretSharing#solve` a `shares` array of the same form returned from `SecretSharing#generate` (except it may contain as few as `threshold` shares), the `threshold` (int) and optionally an outputBase (int representing the radix of the String returned, defaults to 16):

    var shares = [[share0_0, share0_1,...], [share1_0, share1_1,...],...];
    SecretSharing.solve(shares, 7);

This will return a String representing the original data using the radix passed int the `outputBase` variable (default 16).
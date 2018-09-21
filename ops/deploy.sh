#! /usr/bin/env bash

S3_BUCKET=s3://geekhub.newnormal.agency
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../" && pwd)"
cd $BASE_DIR

# Build the assets
npm run build

# Upload to S3
aws s3 cp $BASE_DIR/public/ $S3_BUCKET --recursive --acl public-read